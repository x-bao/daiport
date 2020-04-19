<style scope lang="scss">
.preview {
    padding: 1em;
    -webkit-user-select: none;
}
table {
    width: 100%;
    padding: .5em 0;
    border-spacing: 0;
    thead > tr {
    padding: 1em 0;
    }
    tbody > tr {
        text-align: left;
        padding: 1em 0;
        &:nth-child(odd) {
            background-color: #f5f5f5;
        }
    }
}
.addition {
    margin-top: 1em;
    width: 100%;
    font-size: 14px;
    resize: vertical;
}
#daiport {
    position: absolute;
    left: 9999px;
}
.actions {
    padding: .5em;
    text-align: center;
    &-btn {
        padding: .5em 1em;
        margin: 0 1em;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
        }
        &:active {
            background: #f5f5f5;
        }
    }
}
</style>

<template>
    <div class="preview" v-show="show">
        <div v-if="isEmpty">Nothing to preview</div>
        <div v-else v-html="previewMd"></div>
        <textarea class="addition" name="addition" id="addition" rows="8" v-model="addition"></textarea>
        <div class="actions">
            <textarea id="daiport" v-model="copyStr"></textarea>
            <button class="actions-btn" @click="onCopy('simple')">简报</button>
            <button class="actions-btn" @click="onCopy('daiport')">日报</button>
        </div>
    </div>
</template>

<script>
import day from "dayjs";
import storage from '../utils/storage';

const md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true
});

const today = day(Date.now()).format("YYYY-MM-DD");
const tomorrow = day(Date.now() + 86400000).format("YYYY-MM-DD");

const titles = {
    today: {
        table: '**一、今日工作内容**\n\n| 类型 | 内容 | 完成情况 | 花费工时 | 备注 |\n|:---|:---|:---|:---|:---|\n',
        simple: '今日完成\n'
    },
    tomorrow: {
        table: '**二、明日工作计划**\n\n| 类型 | 内容 | 完成情况 |  预计花费工时 | 备注 |\n|:---|:---|:---|:---|:---|\n',
        simple: '\n明日计划\n'
    }
};

export default {
    props: {
        show: Boolean,
        list: {
            type: Array,
            value: []
        }
    },
    computed: {
        isEmpty() {
            return !this.list.length;
        }
    },
    watch: {
        show(value) {
            if (value) {
                this.adaptData();
                const {autojump, url} = storage.get('config');
                this.autojump = autojump;
                this.url = url;
            }
        }
    },
    data() {
        return {
            previewStr: '',
            previewMd: '',
            defaultAddition: '三、问题与建议\n无\n\n四、学习与总结\n无\n\n',
            addition: '',
            copyStr: '',
            autojump: 0,
            url: ''
        };
    },
    methods: {
        adaptData() {
            let doneStr = titles.today.table,
                todoStr = titles.tomorrow.table;
            this.list.map(
                ({ type, title, progress, duration, note, date }) => {
                    const current = `| ${type} | ${title} | ${progress} % | ${duration} h | ${note} |\n`;
                    if (date === today) {
                        doneStr += current;
                    } else if (date === tomorrow) {
                        todoStr += current;
                    }
                }
            );

            this.previewStr = `${doneStr}${todoStr}\n`;
            this.previewMd = md.render(this.previewStr);
            this.addition = this.addition || this.defaultAddition;
        },
        getSimpleStr() {
            let doneStr = titles.today.simple,
                todoStr = titles.tomorrow.simple;
            this.list.map(
                ({date, title}) => {
                    const current = `- ${title.replace(/<br>/g, ' ')}\n`;
                    if (date === today) {
                        doneStr += current;
                    } else if (date === tomorrow) {
                        todoStr += current;
                    }
                }
            );
            return doneStr + todoStr;
        },
        onCopy(type) {
            if (type === 'daiport') {
                this.copyStr = this.previewStr + this.addition;
            }
            else if (type === 'simple') {
                this.copyStr = this.getSimpleStr();
            }
            this.$nextTick(() => {
                const input = document.querySelector('#daiport');
                input.select();
                if (document.execCommand('copy')) {
                    document.execCommand('copy');
                    this.autojump && window.open(this.url, '_blank');
                    console.log('copied...');
                }
            });
        }
    }
};
</script>
