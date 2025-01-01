import React from 'react'

function LocationSearchPanenel(props) {


    console.log(props)
    //sample array for locations
    const locations = [
        "123 MG Road, Near Brigade Road, Bengaluru, Karnataka, 560001, India",
        "456 Nehru Place, Near Kalkaji Mandir, New Delhi, Delhi, 110019, India",
        "789 Park Street, Near Park Hotel, Kolkata, West Bengal, 700016, India",
        "24B Near Kapoor's cafe, Sherians coding school, 700016, Bhopal",
    ]

    return (

        <div>
            {
                locations.map(function (elem, idx) {
                    return (
                        <div
                            key={idx}
                            onClick={() => {
                                props.setVehiclePanel(true)
                                props.setPanelOpen(false)
                            }}
                            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start'
                        >
                            <h2
                                className='bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full'
                            ><i className='ri-map-pin-fill '></i></h2>
                            <h4 className='font-medium'>{elem}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanenel