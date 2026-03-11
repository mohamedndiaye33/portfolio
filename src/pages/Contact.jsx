function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      
      <h1 className="text-4xl font-bold text-center py-16 mb-10">
        Contactez-moi
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </h1>

      <form className="space-y-6 bg-gray-200 dark:bg-blue-800 p-8 rounded-xl shadow-md">

        <div>
          <label className="block mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="votre@email.com"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Votre message..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Envoyer le message
        </button>

      </form>

    </section>
  );
}

export default Contact;