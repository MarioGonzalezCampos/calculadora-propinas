const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

const TipPercentageForm = ({setTip, tip} : TipPercentageFormProps) => {
  return (
    <div className="border p-5 ">
        <h3 className="font-black text-2xl">Propina:</h3>
        <form action="">
            {tipOptions.map ( tipOptions => (
                <div key={tipOptions.id} className="flex gap-3">
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input 
                        type="radio"
                        id={tipOptions.id}
                        name="tip"
                        value={tipOptions.value}
                        onChange={ e => setTip(+e.target.value)} // podria ser setTip(+e.target.value), es lo mismo
                        checked={tipOptions.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipPercentageForm