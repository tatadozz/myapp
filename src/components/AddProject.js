import { db } from "../firebaseConf";
import { Component } from "react";
import { Link } from "react-router-dom";

export class AddProject extends Component {

    state = {
        name: "",
        tag: "",
        description: "",
        github: "",
    }

    render(){
        const addMyProject = (e) => {
            e.preventDefault();
            db.collection("projets").add({
                name: this.state.name,
                tag: this.state.tag,
                description: this.state.description,
                github: this.state.github,
            })
            this.setState({
                name: "",
                tag: "",
                description: "",
                github: ""
            })
        }

        const updateInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    
          return (
            <>
             <h1>AddProject</h1>
             <form onSubmit={addMyProject}>
                 <input
                    type="text"
                    name="name"
                    placeholder="Nom du projet"
                    onChange={updateInput}
                    value={this.state.name}/>
                <input
                    type="text"
                    name="tag"
                    placeholder="Tag du projet"
                    onChange={updateInput}
                    value={this.state.tag}/>
                <input
                    type="text"
                    name="description"
                    placeholder="Description du projet"
                    onChange={updateInput}
                    value={this.state.description}/>
                <input
                    type="text"
                    name="github"
                    placeholder="Lien du github"
                    onChange={updateInput}
                    value={this.state.github}/>
    
                <button className="bg-blue-300 px-8 py-4 rounded-xl" type="submit">Mettre en ligne</button>
             </form>
             <Link style={{color: "black"}} to="/">Revenir à l'accueil</Link>
            </>
          )
    }
}

export default AddProject;