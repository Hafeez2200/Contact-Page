import React from 'react'

const FormTemplate = () => {
  return (
    <form className=" space-y-6">
              <div className=" grid md:grid-cols-2 gap-4">
                <div>
                  <label className=" block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className=" form-input w-full px-4 py-3 rounded-lg text-white placeholder:text-gray-300"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label className=" block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className=" form-input w-full px-4 py-3 rounded-lg text-white placeholder:text-gray-300"
                    placeholder="Company"
                    required
                  />
                </div>
              </div>

              <div className=" grid md:grid-cols-2 gap-4">
                <div>
                  <label className=" block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className=" form-input w-full px-4 py-3 rounded-lg text-white placeholder:text-gray-300"
                    placeholder="PHone"
                    required
                  />
                </div>
                <div>
                  <label className=" block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className=" form-input w-full px-4 py-3 rounded-lg text-white placeholder:text-gray-300"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className=" block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className=" form-input w-full px-4 py-3 rounded-lg text-white placeholder:text-gray-300"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label className=" block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className=" form-input w-full px-4 py-3 resize-none rounded-lg text-white placeholder:text-gray-300"
                  placeholder="Message"
                  required
                />
              </div>

              <button
                className=" w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
              px-4 py-3 text-white rounded-full transition-all hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
  )
}

export default FormTemplate