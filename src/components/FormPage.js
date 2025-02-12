import { React, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

function FormPage() {
  const initialFormData = {
    clientName: "Collabera - Collabera Inc",
    purchaseOrderType: "Group PO",
    purchaseOrderNo: "",
    receivedOn: "",
    receivedFrom: "",
    receivedFromEmail: "",
    poStartDate: "",
    poEndDate: "",
    budget: "",
    currency: "USD - Dollars ($)",
    jobTitle: "Application Development",
    jobId: "OWNAI_234",
    talents: [
      {
        name: "Monika Goyal Test",
        contractDuration: "",
        billRate: "",
        currency: "USD - Dollars ($)",
        standardTimeBR: "",
        overTimeBR: "",
      },
      {
        name: "shaili khatri",
        contractDuration: "",
        billRate: "",
        currency: "USD - Dollars ($)",
        standardTimeBR: "",
        overTimeBR: "",
      },
    ],
    jobTitle2: "Business Administrator",
    jobId2: "CLK_12880",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [talentSections, setTalentSections] = useState([
    { jobTitle: "", jobId: "", talents: [] },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTalentChange = (sectionIndex, talentIndex, e) => {
    const { name, value } = e.target;
    const newTalentSections = [...talentSections];
    newTalentSections[sectionIndex].talents[talentIndex][name] = value;
    setTalentSections(newTalentSections);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setTalentSections([{ jobTitle: "", jobId: "", talents: [] }]);
  };

  const addNewTalentSection = () => {
    setTalentSections([
      ...talentSections,
      { jobTitle: "", jobId: "", talents: [] },
    ]);
  };

  const addTalent = (sectionIndex) => {
    const newTalentSections = [...talentSections];
    newTalentSections[sectionIndex].talents.push({
      name: "",
      contractDuration: "",
      billRate: "",
      currency: "USD - Dollars ($)",
      standardTimeBR: "",
      overTimeBR: "",
    });
    setTalentSections(newTalentSections);
  };

  const deleteTalentSection = (sectionIndex) => {
    const newTalentSections = talentSections.filter(
      (_, index) => index !== sectionIndex
    );
    setTalentSections(newTalentSections);
  };

  const deleteTalent = (sectionIndex, talentIndex) => {
    const newTalentSections = [...talentSections];
    newTalentSections[sectionIndex].talents = newTalentSections[
      sectionIndex
    ].talents.filter((_, index) => index !== talentIndex);
    setTalentSections(newTalentSections);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Client Name <span className="text-red-500">*</span>
          </label>
          <select
            name="clientName"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.clientName}
            onChange={handleChange}
          >
            <option value="Collabera - Collabera Inc">
              Collabera - Collabera Inc
            </option>
            <option value="Client A">Client A</option>
            <option value="Client B">Client B</option>
            <option value="Client C">Client C</option>
            <option value="Client D">Client D</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Purchase Order Type <span className="text-red-500">*</span>
          </label>
          <select
            name="purchaseOrderType"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.purchaseOrderType}
            onChange={handleChange}
          >
            <option value="Group PO">Group PO</option>
            <option value="Individual PO">Individual PO</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Purchase Order No <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="purchaseOrderNo"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="PO Number"
            value={formData.purchaseOrderNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Received On <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="receivedOn"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.receivedOn}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-1 min-w-[250px]">
          <label className="block text-gray-700 font-semibold mb-2 text-nowrap">
            Received From <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="receivedFrom"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Received From Name"
            value={formData.receivedFrom}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1 min-w-[250px]">
          <label className="block text-gray-700 font-semibold mb-2">
            Received From Email ID
          </label>
          <input
            type="email"
            name="receivedFromEmail"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Received From Email ID"
            value={formData.receivedFromEmail}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1 min-w-[250px] flex gap-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2 text-nowrap">
              PO Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="poStartDate"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.poStartDate}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2 text-nowrap">
              PO End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="poEndDate"
              min={formData.poStartDate}
              value={formData.poEndDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="flex-1 min-w-[250px] flex gap-4">
          <div className="md:w-1/2">
            <label className="block text-gray-700 font-semibold mb-2 text-nowrap">
              Budget <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="budget"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-gray-700 font-semibold mb-2 text-nowrap">
              Currency <span className="text-red-500">*</span>
            </label>
            <select
              name="currency"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.currency}
              onChange={handleChange}
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
        </div>
      </div>

      <hr className="my-6" />
      <div className="flex justify-between bg-gray-200 px-5">
        <h2 className="text-gray-700 font-semibold mt-2">Talent Detail</h2>
        {formData.purchaseOrderType === "Group PO" && (
          <button
            className="p-2 bg-white text-black px-4 rounded-full border border-black"
            onClick={addNewTalentSection}
          >
            + Add Another
          </button>
        )}
      </div>

      {talentSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Job Title/REQ Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={section.jobTitle}
                  onChange={(e) => {
                    const newTalentSections = [...talentSections];
                    newTalentSections[sectionIndex].jobTitle = e.target.value;
                    setTalentSections(newTalentSections);
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Job ID/REQ ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobId"
                  className="w-full border border-gray-300 p-2 rounded bg-gray-200"
                  value={section.jobId}
                  onChange={(e) => {
                    const newTalentSections = [...talentSections];
                    newTalentSections[sectionIndex].jobId = e.target.value;
                    setTalentSections(newTalentSections);
                  }}
                />
              </div>
            </div>
            <span className="flex justify-end w-full inline">
              <button
                className="text-gray-500 rounded rounded-full"
                onClick={() => deleteTalentSection(sectionIndex)}
              >
                <RiDeleteBin6Line />
              </button>
              <button
                className="text-gray-500 rounded rounded-full ml-2"
                onClick={() => addTalent(sectionIndex)}
              >
                <FaPlus />
              </button>
            </span>
          </div>

          {section.talents.map((talent, talentIndex) => (
            <div key={talentIndex} className="mt-6">
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700 font-semibold">
                  {talent.name}
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Contract Duration
                  </label>
                  <input
                    type="text"
                    name="contractDuration"
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Contract Duration"
                    value={talent.contractDuration}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Bill Rate
                  </label>
                  <input
                    type="text"
                    name="billRate"
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Bill Rate"
                    value={talent.billRate}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Currency
                  </label>
                  <select
                    name="currency"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={talent.currency}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  >
                    <option value="USD">USD - US Dollar ($)</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Standard Time BR
                  </label>
                  <input
                    type="text"
                    name="standardTimeBR"
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Std. Time BR"
                    value={talent.standardTimeBR}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Currency
                  </label>
                  <select
                    name="currency"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={talent.currency}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  >
                    <option value="USD">USD - US Dollar ($)</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Over Time BR
                  </label>
                  <input
                    type="text"
                    name="overTimeBR"
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Over Time BR"
                    value={talent.overTimeBR}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                    Currency
                  </label>
                  <select
                    name="currency"
                    className="border border-gray-300 p-2 rounded w-full"
                    value={talent.currency}
                    onChange={(e) =>
                      handleTalentChange(sectionIndex, talentIndex, e)
                    }
                  >
                    <option value="USD">USD - US Dollar ($)</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
              </div>

            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-end mt-6">
        <button
          className="bg-white text-black px-8 py-2 rounded rounded-full border border-black mr-2"
          onClick={handleReset}
        >
          Reset
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}

export default FormPage;
