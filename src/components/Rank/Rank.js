import React, { Component } from 'react';

// https://gxba7p1emj.execute-api.us-east-1.amazonaws.com/prod/rank?rank=0

class Rank extends Component {

    state = {
        emoji: ''
    };

    // Grad Badgre Rank on component update
    componentDidMount() {
        this.generateEmoji(this.props.entries);
    }

    // Update Badge Rank on Upload
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.entries === this.props.entries) {
            return null;
        }

        this.generateEmoji(this.props.entries);
    }

    // Grab our rank badge from the Lambda URI
    generateEmoji = entries => {
        fetch(`https://gxba7p1emj.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
            .then(res => res.json())
            .then(data => this.setState({ emoji: data.input }))
            .catch(console.log);
    }

    render() {

        const { name, entries } = this.props;
        const { emoji } = this.state;

        return (
            <div>
                <div className='white f3'>
                    {`${name}, your current entry count is...`}
                </div>
                <div className='white f1'>
                    {entries}
                </div>
                <div className='white f4'>{`Your Rank: ${emoji}`}</div>
            </div>
        );
    }
}

export default Rank;