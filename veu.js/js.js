var app = new Vue({
    el: '#wrapper',
    data: {
        newName: '',
        newLastName: '',
        phone: '',
        email: '',
        vis: false,
        addUser: false,
        delet: false,
        delAll: 'Точно удолить все контакты ?',
        delUser: 'Точно удолить ?',
        users: [{
            id: 0,
            name: 'Иван',
            lastName: 'Пупкин',
            phone: '903432834523',
            email: 'test@test.com'
        }],
        disablid: true,
        newUser: [],

    },

    methods: {
        push() {
            if (this.newName.length > 0 || this.newLastName.length > 0)
                this.users.push({
                    id: this.index,
                    name: this.newName,
                    lastName: this.newLastName,
                    phone: this.phone,
                    email: this.email,
                })

        },

        del(index) {
            this.users.splice(index, 1)
        },


    },

})