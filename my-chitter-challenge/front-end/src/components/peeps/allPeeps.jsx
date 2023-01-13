import SinglePeep from "./singlePeep";
const AllPeeps = ({ peepData }) => {

    if (peepData.length > 0) {
        return (
            peepData.map(peep => {
                const { userName, datePosted, peepBody } = peep;

                const peepProps = { userName, datePosted, peepBody };

                return (
                    <span key={peep._id}>
                        <SinglePeep peepProps={peepProps} />

                    </span>
                )
            })
        )
    }
}

export default AllPeeps; 