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
            <div className="w-1/5 m-auto">
                <h1 className="text-center text-4xl my-8">AddProject</h1>
             <div className="flex-col bg-slate-400 p-16 rounded-xl">
             <form onSubmit={addMyProject}>
                 <input
                    className="my-4"
                    type="text"
                    name="name"
                    placeholder="Nom du projet"
                    onChange={updateInput}
                    value={this.state.name}/><br/>
                <input
                    className="my-4"
                    type="text"
                    name="tag"
                    placeholder="Tag du projet"
                    onChange={updateInput}
                    value={this.state.tag}/><br/>
                <input
                    className="my-4"
                    type="text"
                    name="description"
                    placeholder="Description du projet"
                    onChange={updateInput}
                    value={this.state.description}/><br/>
                <input
                    className="my-4"
                    type="text"
                    name="github"
                    placeholder="Lien du github"
                    onChange={updateInput}
                    value={this.state.github}/><br/>
    
                <button className="bg-blue-300 px-8 py-4 rounded-xl" type="submit">Mettre en ligne</button>
             </form>
             <div className="w-3/5 m-auto">
                <Link style={{color: "black", textAlign: "center"}} to="/">⬅️ Revenir à l'accueil</Link>
             </div>
             </div>
            </div>
          )
    }
}

export default AddProject;