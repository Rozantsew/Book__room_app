import React, { Component } from 'react'
import {RoomContext} from "../../context/context"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        
        return (
            <div>
                Hello from featuredRooms 
            </div>
        )
    }
}
