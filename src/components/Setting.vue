
<style lang="scss">
.setting {
    font-size: 14px;
    ul {
        padding: 0;
    }
    padding: .5em 1em 0;
    &__item {
        display: flex;
        margin-bottom: .5em;
        &-title {
            flex-basis: 6em;
            width: 6em;
            padding: .5em 0;
            text-align: right;
            opacity: .8;
        }
        &-content {
            flex: 1;
            display: flex;
            align-items: center;
            &__types {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
            &-type {
                display: flex;
                align-items: center;
                padding: .5em 0;
                .elabel {
                    width: 10em;
                }
            }
            &-options {
                width: 20px;
                height: 20px;
                background: url('../assets/options.png') no-repeat;
                background-position: 0 0;
                background-size: 20px;
                &:hover {
                    cursor: pointer;
                    background-position-y: -23.5px;
                }
                &.del {
                    background-position-y: -47.3px;
                    &:hover {
                        cursor: pointer;
                        background-position-y: -71px;
                    }
                }
            }
            &__autojump {
                label {
                    margin-right: 3em;
                    input {
                        margin-right: .5em;
                    }
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>

<template>
    <ul class="setting" v-show="show">
        <li class="setting__item">
            <div class="setting__item-title">日报地址：</div>
            <div class="setting__item-content">
                <ELabel :content="config.url" lkey="url" :context="config" @done="onDone"></ELabel>
            </div>
        </li>
        <li class="setting__item">
            <div class="setting__item-title">自动跳转：</div>
            <div class="setting__item-content setting__item-content__autojump">
                <label><input type="radio" name="autojump-yes" id="yes" :value="1" v-model="config.autojump" />是</label>
                <label><input type="radio" name="autojump-yes" id="no" :value="0" v-model="config.autojump" />否</label>
            </div>
        </li>
        <li class="setting__item">
            <div class="setting__item-title">Motto：</div>
            <div class="setting__item-content setting__item-content__autojump">
                <ELabel :content="config.motto" lkey="motto" :context="config" @done="onDone"></ELabel>
            </div>
        </li>
        <li class="setting__item">
            <div class="setting__item-title">类型：</div>
            <ul class="setting__item-content setting__item-content__types">
                <li class="setting__item-content-type" v-for="(type, index) in config.types" :key="index">
                    <ELabel :content="type" :lkey="index" :context="config.types" @done="onDone"></ELabel>
                    <div :class="['setting__item-content-options', {del: index > 0}]" @click="onEdit(index)"></div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import ELabel from './ELabel';
import storage from '../utils/storage';

const STORAGE_KEY = 'config';

export default {
    components: {ELabel},
    props: {
        show: Boolean,
    },
    watch: {
        config: {
            handler(value) {
                storage.save(STORAGE_KEY, value);
            },
            deep: true
        }
    },
    data() {
        return {
            default: {
                url: 'https://tapd.cn',
                motto: 'Rest or Rust'
            },
            config: {
                url: 'https://tapd.cn',
                types: ['会议'],
                autojump: 1,
                motto: 'Rest or Rust'
            }
        }
    },
    mounted() {
        const config = storage.get(STORAGE_KEY);
        const defaultConfig = this.config;
        Object.assign(defaultConfig, config);
        this.config = defaultConfig;
    },
    methods: {
        onDone({context, key, value}) {
            context[key] = value;
            this.updateConfig(this.config);
        },
        onEdit(index) {
            const types = this.config.types;
            if (index === 0) {
                const length = types.length;
                if (types[length - 1] === '-') {
                    return;
                }
                types.push('-');
            }
            else {
                types.splice(index, 1);
            }
            this.updateConfig(this.config);
        },
        updateConfig(config) {
            storage.save(STORAGE_KEY, config);
        }
    }
}
</script>
