function Header() {
    return(
        <header>
            <h1>Scoreboard</h1>
            <span classNmae="status">Players: 1</span>
        </header>
    );
    
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);