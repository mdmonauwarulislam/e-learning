/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiMiniCheck, HiMiniXMark } from "react-icons/hi2";

function Pricing({ title, price, period, features, updatePlan }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedPeriod, setUpdatedPeriod] = useState(period);
  const [updatedFeatures, setUpdatedFeatures] = useState(features);

  const handleUpdate = () => {
    updatePlan(title, {
      title: updatedTitle,
      price: updatedPrice,
      period: updatedPeriod,
      features: updatedFeatures,
    });
    setIsEditing(false);
  };

  return (
    <div className="p-4 mb-4 border rounded-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
            placeholder="Price"
          />
          <input
            type="text"
            value={updatedPeriod}
            onChange={(e) => setUpdatedPeriod(e.target.value)}
            placeholder="Period"
          />
          <div>
            {updatedFeatures.map((feature, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={feature.isCross}
                  onChange={(e) => {
                    const newFeatures = [...updatedFeatures];
                    newFeatures[index].isCross = e.target.checked;
                    setUpdatedFeatures(newFeatures);
                  }}
                />
                <input
                  type="text"
                  value={feature.contents}
                  onChange={(e) => {
                    const newFeatures = [...updatedFeatures];
                    newFeatures[index].contents = e.target.value;
                    setUpdatedFeatures(newFeatures);
                  }}
                  placeholder="Feature"
                />
              </div>
            ))}
          </div>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{price} {period}</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                {feature.isCross ?  <HiMiniCheck/> : <HiMiniXMark/>} {feature.contents}
              </li>
            ))}
          </ul>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Pricing;
