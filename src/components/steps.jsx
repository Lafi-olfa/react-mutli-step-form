export default function Steps() {
    return (
        <div className="header">
            <div className="steps">
                <div className="step-item">
                    <div className="step-circle">1</div>
                    <div className="step-info">
                        <h1>STEP 1</h1>
                        <p>YOUR INFO</p>
                    </div>
                </div>
                {/*  */}
                <div className="step-item">
                    <div className="step-circle">2</div>
                    <div className="step-info">
                        <h1>STEP 2</h1>
                        <p>SELECT PLAN</p>
                    </div>
                </div>
                {/*  */}
                <div className="step-item">
                    <div className="step-circle">3</div>
                    <div className="step-info">
                        <h1>STEP 3</h1>
                        <p>ADD-ONS</p>
                    </div>
                </div>
                {/*  */}
                <div className="step-item">
                    <div className="step-circle">4</div>
                    <div className="step-info">
                        <h1>STEP 4</h1>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )

}