import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'sofas',
                    name: 'Sofas'
                },
                {
                    key: 'lamps',
                    name: 'Lamps'
                },
                {
                    key: 'armchairs',
                    name: 'Armchairs'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => {
            return <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        })}
      </div>
    )
  }
}

export default Categories