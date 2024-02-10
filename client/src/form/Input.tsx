import { FC } from "react";


const Input: FC<{
    label: string;
    unit: string;
    value: number | string;
    onChange: any;
    type?: string;
}> = ({ label, unit, onChange, value, type }) => {


    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        if (type === 'text') {
            onChange(value);
        } else if (value.length < 15) {
            onChange(parseInt(value || '0'));
        }
    }
    return (
        <div className='frame'>
            <div className='text-wrapper-2'>{label}</div>
            <div className='frame-2'>
                <input
                    className='text-wrapper-3'
                    type='text'
                    value={value}
                    onChange={changeHandler}
                />
                <div className='text-wrapper-3'>{unit}</div>
            </div>
        </div>
    );
};



export default Input;