import "./Selectoptions.css"
export const Selectbar = (props) => {
    return (
        <>
            <div className="Selectbar">
                <div className="Selectbar-logo">
                    <img className="logo" src="https://cryptologos.cc/logos/compound-comp-logo.png" alt="dfvbn" />
                </div>
                <div className="Selectbar-content">
                <p>{props.name}</p>
                    <select class="form-select form-select-sm" aria-label="Small select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

        </>
    )
}