import React, { Component } from 'react';

class NewsletterSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            parentName: '',
            interest: 'school',
            role: '',
            submitted: false,
            error: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, parentName, role } = this.state;

        if (!email || !parentName || !role) {
            this.setState({ error: 'Please fill in all fields (Name, Email, and Role)' });
            return;
        }

        if (!email.includes('@')) {
            this.setState({ error: 'Please enter a valid email' });
            return;
        }

        console.log(`Subscribing ${parentName} (${email}) as ${role} interested in ${this.state.interest}...`);

        this.setState({
            submitted: true,
            error: ''
        });

        setTimeout(() => {
            this.setState({
                submitted: false,
                email: '',
                parentName: '',
                role: ''
            });
        }, 3000);
    };

    render() {
        const { email, parentName, interest, role, submitted, error } = this.state;

        return (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl soft-shadow border-2 border-blue-100 mt-6">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">📬 Weekly Social Tips</h3>
                    <p className="text-gray-600">Get expert activities sent to your inbox!</p>
                </div>

                {submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-xl relative text-center">
                        <div className="text-4xl mb-2">🎉</div>
                        <strong className="font-bold text-xl block mb-1">You're on the list!</strong>
                        <span className="block text-green-800">Thanks for joining us, {parentName}.</span>
                        <div className="text-sm mt-2 opacity-75">Watch for tips about {interest} soon!</div>
                    </div>
                ) : (
                    <form onSubmit={this.handleSubmit} className="space-y-4 max-w-lg mx-auto">
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-sm rounded">
                                <span className="font-bold">Oops!</span> {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">My Role:</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center space-x-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Parent"
                                            checked={role === 'Parent'}
                                            onChange={this.handleInputChange}
                                            className="text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span className="text-sm font-medium">Parent</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Teacher"
                                            checked={role === 'Teacher'}
                                            onChange={this.handleInputChange}
                                            className="text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span className="text-sm font-medium">Teacher</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">I'm interested in:</label>
                                <select
                                    name="interest"
                                    value={interest}
                                    onChange={this.handleInputChange}
                                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none bg-white font-medium text-gray-700"
                                >
                                    <option value="school">School Skills 🏫</option>
                                    <option value="home">Home Manners 🏠</option>
                                    <option value="friends">Making Friends 👫</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="parentName"
                                value={parentName}
                                onChange={this.handleInputChange}
                                placeholder="Your Name"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleInputChange}
                                placeholder="Email Address"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none placeholder-gray-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-0.5"
                        >
                            Subscribe to Weekly Tips
                        </button>
                    </form>
                )}
            </div>
        );
    }
}

export default NewsletterSignup;
