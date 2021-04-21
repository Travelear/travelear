const CreatePage = () => {
    return (
        <div>
            <main className="flex justify-center items-center">
                <div className="p-6 mt-20 ml-2 mr-32 w-full space-y-4">
                    <h1 className="border-b pb-6 font-bold text-left uppercase">
                        Create a new post
                    </h1>
                    <div className="w-full flex flex-col">
                        <div>
                            Upload
                        </div>
                        <div>
                            Record
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreatePage;