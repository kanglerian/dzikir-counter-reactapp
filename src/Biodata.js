const Biodata = (props) => {
    return(
        <div>
            <h1>Biodata</h1>
            <ul>
                <li>Nama: {props.nama}</li>
                <li>Usia: {props.usia} tahun</li>
            </ul>
        </div>
    );
}

export default Biodata;