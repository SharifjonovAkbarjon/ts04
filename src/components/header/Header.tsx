import { Component } from 'react'
import axios from 'axios'

interface Product {

    id: number
    images: string[];
    title: string
    description: string
    price: number
}


interface HeaderState {
    counter: number;
    text: string;
    data: null | Product[]
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: any) {
        super(props)
        this.state = {
            counter: 0,
            text: "Hello world",
            data: null
        }
    }

    componentDidMount(): void {
        axios
            .get("https://dummyjson.com/products")
            .then(res => this.setState({ data: res.data.products }))
    }
    render() {
        return (
            <>
                <div>
                    <h2>{this.state.text} {this.state.counter}</h2>
                    <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>click</button>

                    {
                        this.state.data?.map((item: Product): JSX.Element => (
                            <div key={item.id}>
                                <h3>{item.price}</h3>
                                <h3>{item.title}</h3>
                                <h3>{item.description}</h3>
                            </div>
                        ))
                    }
                </div >
            </>
        )
    }
}
