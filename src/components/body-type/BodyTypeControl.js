import React from 'react';
import BodyTypeList from './BodyTypeList';
import NewPartForm from '../part/NewPartForm.js'
import PartDetail from '../part/PartDetail'
import EditPartForm from '../part/EditPartForm';
import CartList from '../cart/CartList';

class BodyTypeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCartList: [],
      formVisibleOnPage: false,
      selectedPart: null,
      bodyTypeVisibleOnPage: 0,
      editing: false,
      masterPartList: [
      {
        bodyType: "Vision & Auditory",
        selection: [
          { partName: "Heat Sensing Visual Sensor", partDescription: "Thrusters are what propels a ship when flying in normal space.", partQuantity: 1, id: 9807, cartTotal: 1 },
          { partName: "Warp Converter", partDescription: "A spacecraft equipped with a warp drive may travel at speeds greater than that of light by many orders of magnitude.", partQuantity: 4, id:9808, cartTotal: 1  }
        ]
      },
      {
        bodyType: "Hardpoints",
        selection: [{ partName: "Pulse Laser", partDescription: "Blasters!", partQuantity: 3, id:9708, cartTotal: 1  }]
      },
      {
        bodyType: "Ship Armor",
        selection: [{ partName: "Titanium Plate", partDescription: "Ship Armor", partQuantity: 4, id:9608, cartTotal: 1  }]
      },
      {
        bodyType: "Utility Mounts",
        selection: [{ partName: "Detailed Surface Scanner", partDescription: "Scans Planets", partQuantity: 5, id:9508, cartTotal: 1  }]
      },
      {
        bodyType: "Shield Generators",
        selection: [{ partName: "4E Shield Generator", partDescription: "Protect your shiiit", partQuantity: 4, id:9408, cartTotal: 1  }]
      },
      {
        bodyType: "Internal compartments",
        selection: [{ partName: "6B Cargo Hold", partDescription: "Hold your shiiit", partQuantity: 5, id:9308, cartTotal: 1  }]
      }]
    };
  }

  handleBuyClick = (id) => {    
    const currentCatIndex = this.state.bodyTypeVisibleOnPage;
    const clone = [...this.state.masterPartList]
    const cartClone = [...this.state.masterCartList]
    for (let i = 0; i <= clone[currentCatIndex].selection.length; i++){
      if (clone[currentCatIndex].selection[i].id === id){

        const currentPart = clone[currentCatIndex].selection[i];
        if (clone[currentCatIndex].selection[i].partQuantity > 1) {
          clone[currentCatIndex].selection[i].partQuantity = clone[currentCatIndex].selection[i].partQuantity -1;

        } else {
          clone[currentCatIndex].selection = this.state.masterPartList[currentCatIndex].selection.filter(pro => pro.id !== id);
        }


        let match = false
        for (const e of cartClone) {
          if (e.id === currentPart.id) {
            match = true
            e.cartTotal += 1;
            break;
          } 
        };
        if (!match) {
          cartClone.push(currentPart)
        }
        
        break;        
      }
    }
    
    this.setState({
      selectedPart: null,
      formVisibleOnPage:false,
      masterPartList: clone,
      masterCartList: cartClone
    });
  }

  handleEditingPartInList = (partToEdit) => {
    const currentCatIndex = this.state.bodyTypeVisibleOnPage;
    const clone = [...this.state.masterPartList]
    const editedSelection = this.state.masterPartList[currentCatIndex].selection
    .filter(part => part.id !== this.state.selectedPart.id)
    .concat(partToEdit);
    clone[currentCatIndex].selection = editedSelection;
    this.setState({
      masterPartList: clone,
      editing: false,
      selectedPart: null
    });
  }

  handleDeleteCartPart = (oldPart) => {
    const clone = [...this.state.masterPartList];
    for (let i = 0; i < clone.length; i++){
      let match = false;
      for (let j = 0; j < clone[i].selection.length; j++){
        if (clone[i].selection[j].id === oldPart.id){
          match = true;
          clone[i].selection[j].partQuantity = clone[i].selection[j].partQuantity + oldPart.cartTotal;
          break;
        }
      }
        if (!match) {
          const cloneOldPart = {...oldPart};
          cloneOldPart.partQuantity = oldPart.cartTotal
          clone[i].selection.push(cloneOldPart)
          break;
        }
      }

    const newSelection = this.state.masterCartList.filter(pro => pro.id !== oldPart.id);

    this.setState({
      masterPartList: clone,
      masterCartList: newSelection
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleClickForm = () => {
    if (this.state.selectedPart != null){
      this.setState({
        formVisibleOnPage: false,
        selectedPart: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleDeletingPart = (id) => {
    const currentCatIndex = this.state.bodyTypeVisibleOnPage;
    const clone = [...this.state.masterPartList]
    const newSelection = this.state.masterPartList[currentCatIndex].selection.filter(pro => pro.id !== id);     
    clone[currentCatIndex].selection = newSelection;    
    this.setState({
      selectedPart: null,
      formVisibleOnPage:false,
      masterPartList: clone});    
  }  

  handleClickUp = () => {
    if (this.state.bodyTypeVisibleOnPage >= 5) {
      this.setState({ bodyTypeVisibleOnPage: 0 })
    }
    else {
      this.setState(prevState => ({
        bodyTypeVisibleOnPage: prevState.bodyTypeVisibleOnPage + 1
      }))
    }
  }

  handleClickDown = () => {
    if (this.state.bodyTypeVisibleOnPage <= 0) {
      this.setState({ bodyTypeVisibleOnPage: 5 })
    }
    else {
      this.setState(prevState => ({
        bodyTypeVisibleOnPage: prevState.bodyTypeVisibleOnPage - 1
      }));
    }
  }

  handleChangingSelectedPart = (id) => {
    const currentCatIndex = this.state.bodyTypeVisibleOnPage;
    const selectedPart = this.state.masterPartList[currentCatIndex].selection.filter(pro => pro.id === id)[0];  
    this.setState({selectedPart: selectedPart});
  }

  handleAddingNewPartToList = (newPart) => {
    const clone = [...this.state.masterPartList]
    const newSelection = clone[newPart.partBodyType].selection.concat(newPart);    
    clone[newPart.partBodyType].selection = newSelection;
    this.setState({
      masterPartList: clone,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentVisibleState = <EditPartForm part = {this.state.selectedPart} onEditPart = {this.handleEditingPartInList} />
      buttonText = "Return to Armaments";
    } else if (this.state.selectedPart != null) {
      currentVisibleState = <PartDetail 
      part = {this.state.selectedPart} 
      onClickingDelete = {this.handleDeletingPart}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Armaments";
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewPartForm onNewPartCreation={this.handleAddingNewPartToList} />;
      buttonText = "Return to Armaments"
    } else {
      currentVisibleState = <BodyTypeList
        currentIndex={this.state.bodyTypeVisibleOnPage} 
        availableParts={this.state.masterPartList} 
        onPartSelection={this.handleChangingSelectedPart}
        onBuyPart={this.handleBuyClick}
        />
      buttonText = "Add new Part"
    }    

    return (
      <React.Fragment>
        <div className="container">
        <div className="row">          
          <div className="col-md-6">
          <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickDown}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg></button>
        <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickUp}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button>
        {currentVisibleState}
        <button className="arrow btn btn-outline-info btn-block" onClick={this.handleClickForm}>{buttonText}</button>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          </div>
          <div className="col-md-6">
          <CartList onDeleteCartPart={this.handleDeleteCartPart} cartList={this.state.masterCartList}/>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default BodyTypeControl;