import React from 'react';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastUserInDb />
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;