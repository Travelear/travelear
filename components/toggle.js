const Toggle = (props) => (<div>
    <div className="bg-gray-200 rounded-full w-auto">
        <div className="bg-gray-300 rounded-full w-full">
            {props.onoff? 
                <div className="transform translate-x-0 transition ease-in-out bg-gray-900 rounded-full h-8 w-8"/> :
                <div className="transform translate-x-full transition ease-in-out bg-gray-900 rounded-full h-8 w-8"/>
            }
        </div>
    </div> 
</div>)

export default Toggle;