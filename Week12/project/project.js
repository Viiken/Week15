class Ship{
    constructor(name){
        this.name = name;
    }
}

class ShipService{
    static url = "https://6534847de1b6f4c59046c631.mockapi.io/Promineo_Tech_API/Ship";

    static getAllShips(){
        return $.get(this.url);
    }

    static getShip(id){
        return $.get(this.url + `/${id}`);
    }

    static createShip(ship){
        return $.post(this.url, ship);
    }

    static updateShip(ship){
        return $.ajax({
            url: this.url + `/${ship._id}`,
            dataType: 'json',
            data: JSON.stringify(ship),
            contentType: `application/json`,
            type: 'PUT'
        })
    }

    static deleteShip(id){
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'Delete'
        });
    }
}



class DOMManager{
    static ships;

    static getAllShips(){
        ShipService.getAllShips().then(ships => this.render(ships));
    }

    
    static createShip(name){
        ShipService.createShip(new Ship(name))
        .then(() => {
            return ShipService.getAllShips();
        })
        .then((ships) => this.render(ships));
    }

    static deleteShip(id){
        ShipService.deleteShip(id)
            .then(() => {
                return ShipService.getAllShips();
            })
            .then((ships) => this.render(ships));
    }


    static render(ships){
        this.ships = ships;
        $('#app').empty();
        for(let ship of ships){
            $('#app').prepend(
                `<div id="${ship._id}" class="card">
                    <div class="card-header">
                        <h2>${ship.name}</h2>
                        <button class="btn btn-dark" onclick="DOMManager.deleteShip('${ship.id}')">Delete</button>
                    </div>
                </di><br>`
            );
        }
    }
}

$('#create-new-ship').click(() => {
    DOMManager.createShip($('#new-ship-name').val());
    $('#new-ship-name').val('');
});

DOMManager.getAllShips();