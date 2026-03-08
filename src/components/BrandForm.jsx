import { useState } from "react";
import { Sparkles, Loader2, AlertCircle, ChevronDown } from "lucide-react";

export default function BrandForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    brand_name: "",
    industry: "",
    objective: "Engagement",
    product_description: "",
  });

  const [errors, setErrors] = useState({});

  const objectives = ["Engagement", "Promotion", "Awareness", "Product Launch"];

  const validate = () => {
    const newErrors = {};

    if (!formData.brand_name.trim())
      newErrors.brand_name = "Brand Name is required";

    if (!formData.industry.trim())
      newErrors.industry = "Industry is required";

    if (!formData.product_description.trim())
      newErrors.product_description = "Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow border border-gray-200 dark:border-gray-700 transition-colors duration-300">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Brand Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Brand Name
          </label>

          <input
            type="text"
            name="brand_name"
            value={formData.brand_name}
            onChange={handleChange}
            placeholder="e.g Nike"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 outline-none transition"
          />

          {errors.brand_name && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.brand_name}
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Industry
          </label>

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="e.g Sportswear"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 outline-none transition"
          />

          {errors.industry && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.industry}
            </p>
          )}
        </div>

        {/* Campaign Objective */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Campaign Objective
          </label>

          <div className="relative">

            <select
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 outline-none appearance-none transition"
            >
              {objectives.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

          </div>
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Product / Service Description
          </label>

          <textarea
            name="product_description"
            value={formData.product_description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your product or service..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 outline-none transition"
          />

          {errors.product_description && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.product_description}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles />
              Generate Tweets
            </>
          )}
        </button>

      </form>
    </div>
  );
}