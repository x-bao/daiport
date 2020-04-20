<style lang="scss">
.elabel {
    position: relative;
    width: 100%;
    color: #2c3e50;
    &-item {
        color: inherit;
    }
    &-label {
        margin-right: 1em;
        font-size: 14px;
        &:hover {
            cursor: text;
        }
    }
    &-edit {
        position: relative;
        margin: 0;
        width: calc(100% - 1em);
        font-size: 14px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.2;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .selections {
        position: absolute;
        top: calc(100% + .5em);
        left: 0;
        z-index: 999;
        width: 100%;
        padding: 0;
        margin: 0;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        list-style: none;
        background-color: #fff;
        &-item {
            position: relative;
            z-index: 1;
            padding: .5em 1em;
            font-size: 14px;
            border-bottom: 1px solid #e2e2e2;
            &:first-of-type {
                border-radius: 5px 5px 0 0;
            }
            &:last-of-type {
                border-radius: 0 0 5px 5px;
            }
            &:hover {
                cursor: pointer;
                background-color: #f5f5f5;
            }
            &.active {
                background-color: #f3f3f3;
            }
        }
    }
}
</style>

<template>
    <div class="elabel">
        <div class="elabel-item elabel-label" v-show="!editing" @dblclick="edit">{{current}}</div>
        <input
            v-show="editing"
            class="elabel-item elabel-edit"
            type="text"
            v-model="current"
            v-todo-focus="editing"
            @blur="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"
        />
        <ol class="selections" v-show="showSelections">
            <li
                :class="['selections-item', {active: current === selection}]"
                v-for="(selection, index) in selections"
                :key="index"
                @click="onSelect(selection)"
            >{{selection}}</li>
        </ol>
    </div>
</template>

<script>
import storage from '../utils/storage';

export default {
    inject: ['todoCtx'],
    props: {
        lkey: [String, Number],
        content: String,
        context: [Object, Array],
        selectKey: String,
    },
    watch: {
        content(value) {
            this.current = value;
        },
        editing(value) {
            if (value) {
                const config = storage.get('config');
                this.selections = config[this.selectKey];
            }
            const timer = setTimeout(() => {
                this.showSelections = value;
                clearTimeout(timer);
            }, 50);
            this.todoCtx.disableKeyEvent = value;
        }
    },
    data() {
        return {
            current: this.content,
            cached: '',
            editing: false,
            selections: [],
            showSelections: false
        }
    },
    methods: {
        edit() {
            const {current} = this;
            this.cached = current;
            if (current === '-' || current === '0') {
                this.current = '';
            }
            this.editing = true;
        },
        doneEdit() {
            this.editing = false;
            const {context, lkey} = this;
            const value = this.current.trim() || '-';
            this.current = value;
            this.$emit('done', {
                context,
                value,
                key: lkey,
            });
        },
        cancelEdit() {
            this.editing = false;
            const {context, lkey} = this;
            this.$emit('done', {
                context,
                key: lkey,
                value: this.cached
            });
        },
        onSelect(value) {
            this.showSelections = false;
            const {context, lkey} = this;
            this.current = value;
            this.$emit('done', {
                context,
                value,
                key: lkey,
            });
        }
    },
    directives: {
        "todo-focus": function(el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
    }
}
</script>
