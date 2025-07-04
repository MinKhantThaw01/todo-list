

const CheckAllAndRemaining = ({ remainingcountl, checkAll }) => {

    return (
        <div className="check-all-container">
            <div>
                <div className="button" onClick={checkAll} >Check All</div>
            </div>

            <span>{remainingcountl} item{remainingcountl > 1 ? "s" : ""} remaining</span>
        </div>

    )
}

export default CheckAllAndRemaining
