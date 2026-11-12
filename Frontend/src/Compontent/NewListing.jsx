export default function NewListing(){
    return(
        <>
            <form method='Post' action='http://localhost:8080/listing'data-bs-validate>
                <input name="listing[title]" placeholder="Title" type="text" class="form-control" required/>
                <div class="invalid-feedback">Title is required</div>
                <br/>
                <textarea name="listing[description]" placeholder="Description" type="text" class="form-control" required/>
                <div class="invalid-feedback">Descrption is required</div>
                <br/>
                <input name="listing[image][url]" placeholder="image" type="text" class="form-control" required/>
                <div class="invalid-feedback">Image Url is required</div>
                <br/>
                <input name="listing[price]" placeholder="Price" type="text" class="form-control" required/>
                <div class="invalid-feedback">Price is required</div>
                <br/>
                <input name="listing[location]" placeholder="location" type="text" class="form-control" required/>
                <div class="invalid-feedback">Location is required</div>
                <br/>
                <input name="listing[country]" placeholder="country" type="text" class="form-control" required/>
                <div class="invalid-feedback">Country is required</div>
                <br/>
                <button class="btn-solid theme-primary justify-self-start">Submit</button>
            </form>
        </>
    )
}