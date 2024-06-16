import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F02%2F89%2F78%2F99%2F1000_F_289789964_WNWiakUNXTPNGRge682BZJBQ8Plw3F2Q.jpg&tbnid=O34O2poA7YVDIM&vet=12ahUKEwiVzafpz-CGAxVJ9DgGHUG6A1cQMyg0egUIARDqAQ..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fpaneer-manchurian-or-paneer-65-paneer-manchurian-is-indian-chinese-cuisine-dish-with-panner-cheese-tomatoes-onion-soy-sauce-close-up%2F289789964&docid=ynHSxIOOC76RhM&w=1000&h=665&q=panner&ved=2ahUKEwiVzafpz-CGAxVJ9DgGHUG6A1cQMyg0egUIARDqAQ" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is some Important text.</p>
                        <div className='container w-100' >
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
