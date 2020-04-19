<style lang="scss">
button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
}

li {
    list-style: none;
}

:focus {
    outline: 0;
}

.hidden {
    display: none;
}

.todoapp {
    background: #fff;
    margin: 20px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.todoapp h1 {
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}

.toggle-all {
    width: 1px;
    height: 1px;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
}

.toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    &:hover {
        cursor: pointer;
    }
}

.toggle-all + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
    color: #737373;
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
    &--empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 14px;
        padding: 1em 0;
        .empty-icon {
            width: 40px;
            height: 40px;
            vertical-align: middle;
            margin-bottom: .5em;
        }
    }
}

.todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
    border-bottom: none;
}

.todo-list li.editing {
    border-bottom: none;
    padding: 0;
}

.todo-list li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
}

.todo-list li .view {
    position: relative;
}

.todo-list li.editing .view {
    display: none;
}

.todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        cursor: not-allowed;
    }
}

.todo-list li .toggle {
    opacity: 0;
}

.todo-list li .toggle + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
}

.todo-list li .toggle:checked + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
}

.todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    transform: translateY(-50%);
    transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
    color: #af5b5e;
    cursor: pointer;
}

.todo-list li .destroy:after {
    content: "×";
}

.todo-list li:hover .destroy {
    display: block;
}

.todo-list li .edit {
    display: none;
}

.todo-list li.editing:last-child {
    margin-bottom: -1px;
}

.todo-list .additions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 60px;
    font-size: 14px;
    background-color: #f5f5f5;
    li {
        border: 0;
    }
    &__item {
        display: flex;
        align-items: center;
        width: 33.3333%;
        font-size: inherit;
        &-note {
            width: 100%;
        }
    }
    p {
        margin: .5em 0;
        width: 2em;
        white-space: nowrap;
        color: #777;
    }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all,
    .todo-list li .toggle {
        background: none;
    }

    .todo-list li .toggle {
        height: 40px;
    }
}

@media (max-width: 430px) {
    .footer {
        height: 50px;
    }

    .filters {
        bottom: 10px;
    }
}
</style>

<template>
    <section class="todoapp">
        <header class="header" v-show="canAddTodo">
            <input
                class="new-todo"
                autofocus
                ref="todo"
                autocomplete="off"
                :placeholder="placeholder"
                v-model="newTodo"
                @keyup.enter="addTodo"
                @focus="onFocus"
                @blur="onBlur"
            />
        </header>
        <section class="main" v-show="todos.length && type !== 'preview'" v-cloak>
            <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone" />
            <label for="toggle-all" v-show="type === 'today'"></label>
            <div class="todo-list--empty" v-if="filteredTodos.length === 0">
                <img class="empty-icon" src="../assets/emptylist.svg" alt="empty-list">
                空空如也
            </div>
            <ul class="todo-list" v-else>
                <li
                    v-for="todo in filteredTodos"
                    class="todo"
                    :key="todo.id"
                    :class="{completed: todo.completed, editing: todo == editedTodo}"
                >
                    <div class="view">
                        <input
                            class="toggle"
                            type="checkbox"
                            v-model="todo.completed"
                            :disabled="type !== 'today'"
                        />
                        <label @click="toggleAdditions(todo)" @dblclick="editTodo(todo)" v-html="todo.title"></label>
                        <button class="destroy" @click="removeTodo(todo)"></button>
                    </div>
                    <input
                        class="edit"
                        type="text"
                        v-model="todo.title"
                        v-todo-focus="todo == editedTodo"
                        @blur="doneEdit(todo)"
                        @keyup.enter="doneEdit(todo)"
                        @keyup.esc="cancelEdit(todo)"
                    />
                    <ul class="additions" v-show="todo.showAddition">
                        <li class="additions__item">
                            <p>类型</p>：
                            <e-label :content="todo.type" lkey="type" select-key="types" :context="todo" @done="onDone"></e-label>
                        </li>
                        <li class="additions__item">
                            <p>进度</p>：
                            <e-label :content="'' + todo.progress" lkey="progress" :context="todo" @done="onDone"></e-label>
                        </li>
                        <li class="additions__item">
                            <p>工时</p>：
                            <e-label :content="'' + todo.duration" lkey="duration" :context="todo" @done="onDone"></e-label>
                        </li>
                        <li class="additions__item additions__item-note">
                            <p>备注</p>：
                            <e-label :content="todo.note" lkey="note" :context="todo" @done="onDone"></e-label>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <Preview ref="preview" :show="type === 'preview'" :list="todos"></Preview>
        <Setting :show="type === 'setting'"></Setting>
        <Actions :todos="todos" :remaining="remaining" :type="type" @change="onChangeType"></Actions>
    </section>
</template>

<script>
import storage from "../utils/storage";
import Actions from "./Actions";
import ELabel from './ELabel';
import Preview from './Preview';
import Setting from './Setting';
import day from "dayjs";

const yestoday = day(Date.now() - 86400000).format("YYYY-MM-DD");
const today = day(Date.now()).format("YYYY-MM-DD");
const tomorrow = day(Date.now() + 86400000).format("YYYY-MM-DD");

const dates = {yestoday, today, tomorrow};

const filters = {
    yestoday: todos => todos.filter(todo => todo.date === yestoday),
    today: todos => todos.filter(todo => todo.date === today),
    tomorrow: todos => todos.filter(todo => todo.date === tomorrow),
    preview: todos => todos.filter(todo => todo.date === today || todo.date === tomorrow)
};

const STORAGE_KEY = "daiport";

export default {
    components: {Actions, ELabel, Preview, Setting},

    data() {
        return {
            todos: [],
            newTodo: '',
            editedTodo: null,
            type: 'today'
        };
    },

    watch: {
        todos: {
            handler: function(todos) {
                todos.map(todo => todo.progress = todo.completed ? 100 : todo.progress);
                storage.save(STORAGE_KEY, todos);
            },
            deep: true
        },
    },

    computed: {
        filteredTodos() {
            const type = this.type;
            if (type === 'setting') {
                return [];
            }
            const filtered = filters[this.type](this.todos);
            return type !== 'all'
                ? filtered
                : filtered.sort((a, b) => (a.date >= b.date ? 1 : -1));
        },
        remaining() {
            return filters.today(this.todos).filter(todo => !todo.completed).length;
        },
        allDone: {
            get: function() {
                return this.remaining === 0;
            },
            set: function(value) {
                this.filteredTodos.forEach(function(todo) {
                    todo.completed = value;
                    todo.progress = 100;
                });
            }
        },
        placeholder() {
            return `What needs to be done ${this.type}?`;
        },
        isEmpty() {
            return !this.todos.length;
        },
        canAddTodo() {
            return this.type === 'today' || this.type === 'tomorrow';
        },
    },

    mounted() {
        this.init();
        this.initKeyEvent();
    },

    methods: {
        init() {
            this.todos = storage.fetch(STORAGE_KEY).reduce((acc, cur) => {
                if (cur.date === yestoday) {
                acc.push(cur);
                    if (cur.progress * 1 < 100 && !cur.copied) {
                        const copied = JSON.parse(JSON.stringify(cur));
                        cur.copied = true;
                        copied.date = today;
                        copied.showAddition = true;
                        acc.push(copied);
                    }
                }
                else if (cur.date === today || cur.date === tomorrow) {
                    acc.push(cur);
                }
                return acc;
            }, []);
        },
        initKeyEvent() {
            window.addEventListener('keyup', ({key}) => {
                const $todo = this.$refs.todo;
                if (this.disableKeyEvent || this.isEmpty) {
                    if (this.isEmpty && $todo) {
                        key === 'Escape' ? $todo.blur() : $todo.focus();
                    }
                    return;
                }
                switch(key) {
                    case 'Escape':
                        $todo && $todo.blur();
                        break;
                    case 'y':
                        this.type = 'yestoday';
                        break;
                    case 'c':
                        this.type = 'today';
                        break;
                    case 't':
                        this.type = 'tomorrow';
                        break;
                    case 'p':
                        this.type = 'preview';
                        break;
                    case 's':
                        this.type = 'setting';
                        break;
                    case 'd':
                        const type = this.type;
                        this.type = 'preview';
                        this.$nextTick(() => {
                            const $preview = this.$refs.preview;
                            if ($preview) {
                                $preview.onCopy('daiport');
                                this.$nextTick(() => {
                                    this.type = type;
                                });
                            }
                        });
                        break;
                }
            });
        },
        addTodo() {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todos.push({
                id: storage.uid++,
                title: value,
                completed: false,
                date: dates[this.type],
                showAddition: false,
                type: '-',
                note: '-',
                progress: 0,
                duration: 0,
            });
            this.newTodo = '';
        },

        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },

        editTodo(todo) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.beforeEditCache = todo.title;
            this.editedTodo = todo;
        },

        doneEdit(todo) {
            if (!this.editedTodo) {
                return;
            }
            this.editedTodo = null;
            todo.title = todo.title.trim();
            if (!todo.title) {
                this.removeTodo(todo);
            }
        },

        cancelEdit(todo) {
            this.editedTodo = null;
            todo.title = this.beforeEditCache;
        },

        onChangeType(type) {
            this.type = type;
        },

        toggleAdditions(current) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.todos.map(todo => todo.id !== current.id && (todo.showAddition = false));
                current.showAddition = !current.showAddition;
            }, 200);
        },

        onDone({context, key, value}) {
            if (this.type === 'today' && key === 'progress') {
                context.completed = value * 1 >= 100;
            }
            context[key] = value;
            const index = this.todos.findIndex(todo => todo.id === context.id);
            this.todos[index] = context;
        },
        onFocus() {
            this.disableKeyEvent = true;
        },
        onBlur() {
            this.disableKeyEvent = false;
        }
    },

    directives: {
        'todo-focus': function(el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
    }
};
</script>
