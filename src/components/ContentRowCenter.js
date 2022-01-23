import React from 'react';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import DoughsInDb from './DoughsInDb';
import SizesInDb from './SizesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastUserInDb />
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Doughs in DB -->*/}
            <DoughsInDb />
            {/*<!-- Doughs in DB -->*/}
            <SizesInDb />
        </div>
    )
}

export default ContentRowCenter;