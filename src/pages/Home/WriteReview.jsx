import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const WriteReview = () => {
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const author = form.get('author');
        const email = form.get('email');
        const quote = form.get('quote');

        const review = { author, email, quote, imageURL: user?.photoURL };

        fetch('http://localhost:5000/api/v1/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                toast.success('Review added successfully');
                e.target.reset();
            }
        })
        .catch((err) => {
            toast.error(err);
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 my-16">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Write a Review</h1>
            <p className="text-center text-lg text-gray-600 mb-8">We value your feedback as it helps us improve our service.</p>

            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                defaultValue={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                defaultValue={user?.email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="quote"
                            name="quote"
                            placeholder="Enter your message"
                            className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            rows="4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        disabled={!user?.email}
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WriteReview;
