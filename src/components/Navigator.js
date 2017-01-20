import React, {Component} from 'react';
import style from './Navigator.scss'

class Navigator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cases: [
                {name: 'case1', notes: ['note1', 'note2', 'note3']}, 
                {name: 'case2', notes: ['note4', 'note5', 'note6']},
                {name: 'case3', notes: ['note7', 'note8', 'note9']}
            ]
        };
    }
    render() {
        let cases = this.state.cases.map((c) => {
            return (
                <li className="case">
                    {c.name}
                    <ul className="note">                        
                        {c.notes.map((n) => {
                            return (<li>{n}</li>)
                        })}
                    </ul>
                </li>)
        });
        
        return (
        <nav className="note">
            <div className="buttons">
                <button>새 책장</button>
                <button>새 노트</button>
            </div>
            <input type="text" className="noteSearch" placeholder="노트 검색"></input>
            <ul className="case">
                {cases}
            </ul>
        </nav>
        );
    }
};

export default Navigator;