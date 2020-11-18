import React, { Fragment, Component } from 'react';
import TodoList from './list'
import TodoAction from './action'
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            isSubmit: false,
            action: "CREATE",
            item: {}
        }
    }

    getList = () => {
        fetch(`https://5fad334d2ec98b0016047fb8.mockapi.io/users`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    result: json
                })
            })
    }

    componentDidMount() {
        this.getList();
    }

    onSubmitData = (data) => {
        this.setState({
            isSubmit: true
        })
        if (this.state.action === "CREATE") {
            fetch('https://5fad334d2ec98b0016047fb8.mockapi.io/users', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json())
                .then(data => {
                    this.getList();
                    this.setState({
                        isSubmit: false
                    })
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            fetch('https://5fad334d2ec98b0016047fb8.mockapi.io/users/' + this.state.item.id, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json())
                .then(data => {
                    this.getList();
                    this.setState({ item: {}, action: "CREATE", isSubmit: false });
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    getItemList = (id) => {
        fetch('https://5fad334d2ec98b0016047fb8.mockapi.io/users/' + id, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                this.setState({ item: data, action: "UPDATE" })
                // console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    changeCreate = () => {
        this.setState({ item: {}, action: "CREATE" });
    }

    onRemove = (id) => {
        // eslint-disable-next-line
        if (confirm("Bạn có chắc muốn xóa ý tưởng này không?")) {
            fetch('https://5fad334d2ec98b0016047fb8.mockapi.io/users/' + id, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
                .then(data => {
                    this.getList();
                    // console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    render() {
        const { result, item, action } = this.state;
        return (
            <Fragment>
                <TodoAction changeCreate={this.changeCreate} action={action} item={item} isSubmit={this.state.isSubmit} onSubmit={(data) => this.onSubmitData(data)} />
                <TodoList data={result} getItem={(id) => this.getItemList(id)} onRemove={(id) => this.onRemove(id)} />
            </Fragment>
        )
    };
}

export default Container;