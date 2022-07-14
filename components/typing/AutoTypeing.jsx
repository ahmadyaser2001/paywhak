
import Typical from 'react-typical'
 

const AutoTypeing = () => {
  return (
    <div>
         <Typical
        steps={['Expenses', 3000, 'Credit cards',3000,'Approvals',3000,'Invoices', 3000, 'Invoices',3000,'Receipts',3000,'Bank wires',3000]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  )
}

export default AutoTypeing
