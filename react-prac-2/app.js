
const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, 'Page is Rendered'),
        React.createElement(
            Person,
            { name: 'Sheikh', occupation: 'Senior Researcher' },
            null
        ),
        React.createElement(
            Person,
            { name: 'Asad', occupation: 'Data Handler' },
            null
        ),
        React.createElement(
            Person,
            { name: 'Taha', occupation: 'Security Manager' },
            null
        ),
    ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    React.createElement(App)
);
// ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('root')
// );