<style lang="scss">
.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
    &-item {
        display: inline;
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
            border-color: rgba(175, 47, 47, 0.1);
            cursor: pointer;
        }
        &.selected {
            border-color: rgba(175, 47, 47, 0.2);
        }
    }
}

.todo-count {
    text-align: left;
}

.todo-count strong {
    font-weight: 300;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    user-select: none;
}

.footer:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.more {
    position: relative;
    z-index: 9;
    width: 2em;
    height: 20px;
    border: 1px solid transparent;
    &:hover {
        // border-color: rgba(175, 47, 47, 0.1);
        cursor: pointer;
        .more__action {
            display: block;
        }
    }
    .img {
        width: 100%;
        height: 100%;
    }
    &__action {
        display: none;
        position: absolute;
        left: 100%;
        bottom: 0;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        width: auto;
        padding: 0;
        margin: 0;
        background-color: #fff;
        &-item {
            width: auto;
            padding: .5em;
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: 0;
            }
            &:hover {
                background-color: #f5f5f5;
            }
        }
    }
}
</style>

<template>
    <footer class="footer" v-show="todos.length" v-cloak>
        <span class="todo-count">
            <strong>{{ remaining }}</strong>
            {{ remaining | pluralize }} left
        </span>
        <ul class="filters">
            <li :class="['filters-item', { selected: type == 'yestoday' }]" @click="onChange('yestoday')">Yestoday</li>
            <li :class="['filters-item', { selected: type == 'today' }]" @click="onChange('today')">Today</li>
            <li :class="['filters-item', { selected: type == 'tomorrow' }]" @click="onChange('tomorrow')">Tomorrow</li>
            <!-- <li :class="['filters-item', { selected: type == 'preview' }]" @click="onChange('preview')">Preview</li> -->
        </ul>
        <div class="more">
            <img class="img" src="../assets/more.svg" alt="" />
            <ul class="more__action">
                <li class="more__action-item" @click="onChange('preview')">Preview</li>
                <li class="more__action-item" @click="onChange('setting')">Setting</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        type: String,
        todos: Array,
        remaining: Number,
    },
    filters: {
        pluralize: function(n) {
            return n === 1 ? 'item' : 'items';
        },
    },
    methods: {
        removeCompleted() {
            this.todos = filters.active(this.todos);
        },
        onChange(type) {
            this.$emit('change', type);
        },
    },
};
</script>
