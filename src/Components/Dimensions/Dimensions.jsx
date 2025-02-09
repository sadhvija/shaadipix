import "./Dimensions.css"
export const Dimensions = () => {
    return (
        <>
            <div className="dimensions-div">
                <div className="dimensions">
                    <div className="dimensions-2-3"></div>
                    <p>2:3</p>
                </div>
                <div className="dimensions">
                    <div className="dimensions-1-1"></div>
                    <p>1:1</p>
                </div>
                <div className="dimensions">
                    <div className="dimensions-16-9"></div>
                    <p>16:9</p>
                </div>
                <div className="dimensions">
                    <div className="dimensions-more"></div>
                    <p>more</p>
                </div>
            </div>
        </>
    );
};