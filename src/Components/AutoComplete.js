import React from 'react';

class AutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            actionOption: 0,
            filtered: [],
            showOptions: false,
            userInput: ""
        }
    }

    onChange = (e) => {
        const { options } = this.props;
        const userInput = e.currentTarget.value;
        const filteredOptions = options.filter(f => {
            return f.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        }).filter((f, i) => i < 4);

        this.setState({
            actionOption: 0,
            filteredOptions,
            showOptions: true,
            userInput
        });
    }

    onKeyDown = (e) => {
        const { actionOption, filteredOptions } = this.state;
        if (e.keyCode === 13) {
            this.setState({
                actionOption: 0,
                showSuggestions: false,
                userInput: filteredOptions[actionOption]
            });
        } else if (e.keyCode === 38) {
            if (actionOption === 0) {
                return false
            };

            this.setState({
                actionOption: actionOption - 1
            })
        } else if (e.keyCode === 40) {
            if (actionOption - 1 === filteredOptions.length) {
                return;
            }
            this.setState({
                actionOption: actionOption + 1
            })
        }
    }

    getOptionList = () => {
        const { showOptions, userInput, filteredOptions, activeOption } = this.state;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={optionName} onClick={() => {}}>
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No Option!</em>
                    </div>
                );
            }
        }
        return optionList;        
    }

    render() {
        const { userInput } = this.state;
        const optionList = this.getOptionList();        
        
        return (
            <>
                <div className={"search-bar"}>
                    <input
                        type={"text"}
                        className={"search-box"}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        value={userInput}
                    />
                    <input type={"submit"} value={"Search"} className={"search-btn"} />
                    {optionList}
                </div>
            </>
        );
    }
}

export default AutoComplete;