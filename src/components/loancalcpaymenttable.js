import React from 'react'
import { paymentTable } from '../constants/programInfo'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <h3>Software Engineering Immersive</h3>
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    {paymentTable.headers.map((header, i) => <th key={i} className="text-center">{header}</th>)}
                </tr>
                    {paymentTable.data.map(data => {
                        return <tr key={data.name}>
                            <td className="text-center">{data.name}</td>
                            <td className="text-center">{data.tuition}</td>
                            <td className="text-center">{data.col}</td>
                        </tr>
                    })}
            </tbody>
        </table>

        <h3>Data Science Immersive</h3>
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    {paymentTable.headers.map((header, i) => <th key={i} className="text-center">{header}</th>)}
                </tr>
                    {paymentTable.data2.map(data => {
                        return <tr key={data.name}>
                            <td className="text-center">{data.name}</td>
                            <td className="text-center">{data.tuition}</td>
                            <td className="text-center">{data.col}</td>
                        </tr>
                    })}
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center bg-black text-white rounded">Software Engineering Immersive</th>
                </tr>
                {paymentTable.data.map((program, i) => {
                    return <React.Fragment key={i}>
                        <tr>
                            <th className="text-center bg-primary text-white rounded">{program.name}</th>
                        </tr>
                        <tr>
                            <td className="text-center">Tuition: {program.tuition}</td>
                        </tr>
                        <tr>
                            <td className="text-center">Cost of Living: {program.col}</td>
                        </tr>
                    </React.Fragment>
                })}
            </tbody>
        </table>
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center bg-black text-white rounded">Data Science Immersive</th>
                </tr>
                {paymentTable.data2.map((program, i) => {
                    return <React.Fragment key={i}>
                        <tr>
                            <th className="text-center bg-primary text-white rounded">{program.name}</th>
                        </tr>
                        <tr>
                            <td className="text-center">Tuition: {program.tuition}</td>
                        </tr>
                        <tr>
                            <td className="text-center">Cost of Living: {program.col}</td>
                        </tr>
                    </React.Fragment>
                })}
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable