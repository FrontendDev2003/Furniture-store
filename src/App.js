import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          name: 'Chair Brown',
          img: 'chair-brown.jpeg',
          desc: 'chair brown with chair less right',
          cost: '40.99',
          category: 'chairs',
        },
        {
          id: 2,
          name: 'Table Brown',
          img: 'table-brown.jpeg',
          desc: 'table brown with chair less right left brown',
          cost: '56.99',
          category: 'tables',
        },
        {
          id: 3,
          name: 'Lamp for wall',
          img: 'wall-lamp.jpeg',
          desc: 'la, mp with chair less right',
          cost: '15.99',
          category: 'lamps',
        },
        {
          id: 4,
          name: 'Armchair',
          img: 'armchair.jpeg',
          desc: 'armchair with, armca with chair less right',
          cost: '270.99',
          category: 'armchairs',
        },
        {
          id: 5,
          name: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'sofa brow sofa, with chair less right',
          cost: '400.99',
          category: 'sofas',
        },
        {
          id: 6,
          name: 'Chair Black',
          img: 'chair-black.jpeg',
          desc: 'chair black chair ls, less with chair less right',
          cost: '39.99',
          category: 'chairs',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.removeOrder = this.removeOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onRemove={this.removeOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category == 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  removeOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder (item) {
    let inArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        inArray = true;
      }
    })
    if (!inArray) {
      this.setState({orders: [...this.state.orders, item]}, )
    }
  }
}

export default App;
