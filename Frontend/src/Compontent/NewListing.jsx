export default function NewListing(){
    return(
        <>
            <form method='Post' action='http://localhost:8080/listing'>
                <input name="listing[title]" placeholder="Title" type="text" />
                <br/>
                <textarea name="listing[description]" placeholder="Description" type="text" />
                <br/>
                <input name="listing[image][url]" placeholder="image" type="text" />
                <br/>
                <input name="listing[price]" placeholder="Price" type="text" />
                <br/>
                <input name="listing[location]" placeholder="location" type="text" />
                <br/>
                <input name="listing[country]" placeholder="country" type="text" />
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}