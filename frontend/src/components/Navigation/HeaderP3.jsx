import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
const HeaderP3 = () => {
  return (
    <div className="header_3Con">
      <ul className="list">
        <li>
          <Link className="link" to={"#"}>
            Vitamins & Nutrition
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Vitamins & Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Muttivitamins</Link>
                </li>
                <li>
                  <Link to={"#"}>Vitamins A-Z</Link>
                </li>
                <li>
                  <Link to={"#"}>Mineral Supplements</Link>
                </li>
                <li>
                  <Link to={"#"}>Vitamin B12 & B Complex</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Nutritional Drinks</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"#"}>Adult Daily Nutrition</Link>
                </li>
                <li>
                  <Link to={"#"}>Kids Nutrition (2-15 Yrs)</Link>
                </li>
                <li>
                  <Link to={"#"}>For Women</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Health Food & Drinks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Green Tea & Herbal Tea</Link>
                </li>
                <li>
                  <Link to={"#"}>Apple Cider Vinegar</Link>
                </li>
                <li>
                  <Link to={"#"}>Healthy Snacks</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Protein Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Whey Protein</Link>
                </li>
                <li>
                  <Link to={"#"}>Amino Acids</Link>
                </li>
                <li>
                  <Link to={"#"}>Mass Gainers</Link>
                </li>
                <li>
                  <Link to={"#"}>Workout Essential</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Omega & Fish Oi</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Adult Daily Nutrition</Link>
                </li>
                <li>
                  <Link to={"#"}>Kids Nutrition (2-15 Yrs)</Link>
                </li>
                <li>
                  <Link to={"#"}>For Women</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Immunity Boosters</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Chyawanprasha</Link>
                </li>
                <li>
                  <Link to={"#"}>Vitamin C</Link>
                </li>
                <li>
                  <Link to={"#"}>Antioxidant Supplements</Link>
                </li>
                <li>
                  <Link to={"#"}>Ayurvedic Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Specialty Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Pre and Probiotics</Link>
                </li>
                <li>
                  <Link to={"#"}>Glucosamine</Link>
                </li>
                <li>
                  <Link to={"#"}>Collagen</Link>
                </li>
                <li>
                  <Link to={"#"}>Antioxidants</Link>
                </li>
                <li>
                  <Link to={"#"}>Biotin</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Weight Management</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Weight Management Herbs</Link>
                </li>
                <li>
                  <Link to={"#"}>Meal Replacements</Link>
                </li>
                <li>
                  <Link to={"#"}>Weight Gain</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Diabetes
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* Sub Menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Blood Glucose Monitors</Link>
                </li>
                <li>
                  <Link to={"#"}>Test Strips & Lancets</Link>
                </li>
                <li>
                  <Link to={"#"}>Syringes & Pens</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Diabetic Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Vitamins, Minerals & Antioxidants</Link>
                </li>
                <li>
                  <Link to={"#"}>Homeopathy Medicines</Link>
                </li>
                <li>
                  <Link to={"#"}>Ayurvedic Medicines</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Sugar Substitutes</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    {" "}
                    <strong>Diabetic Diet</strong>{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Amino Acids</Link>
                </li>
                <li>
                  <Link to={"#"}>Juices & Vinegars</Link>
                </li>
                <li>
                  <Link to={"#"}>Superfoods</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Diabetic Foot Health</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Healthcare Devices
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* ========================================================== */}
          {/* sub menu */}

          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Top brands in Healthcare Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>omron</Link>
                </li>
                <li>
                  <Link to={"#"}>Accu-chek</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr. Morepen Devices</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Trust</Link>
                </li>
                <li>
                  <Link to={"#"}>OneTouch</Link>
                </li>
                <li>
                  <Link to={"#"}>Contour</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Masks (N95, Surgical and more)</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"#"}>Face Shield</Link>
                </li>
                <li>
                  <Link to={"#"}>Surgical Masks</Link>
                </li>
                <li>
                  <Link to={"#"}>N95 Masks</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Oxygen Concentrators & Cans</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>BP Monitors</Link>
                </li>
                <li>
                  <Link to={"#"}>Nebulizers & Vaporizers</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul style={{ width: "220px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Oximeters & Pedometers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Vital Signs Monitors & Wearables</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Weighing Scales</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Thermometers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>IR Thermometers</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Body Massager</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Diabetes Monitors</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Mobility Equipments</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Exercise Equipments</strong>
                  </Link>
                  <Link to={"#"}>
                    <strong>Doctor's Corner</strong>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>Stethoscopes</Link>
                </li>
                <li>
                  <Link to={"#"}>Tapes & Bandages</Link>
                </li>
                <li>
                  <Link to={"#"}>Clinical Diagnostic Equipments</Link>
                </li>
                <li>
                  <Link to={"#"}>Dressings & Wound Care</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Supports & Braces</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Neck & Shoulder Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Knee & Leg Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Ankle & Foot Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Hand & Wrist Braces</Link>
                </li>
                <li>
                  <Link to={"#"}>Arm & Elbow Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Cervical Pillows</Link>
                </li>
                <li>
                  <Link to={"#"}>Compression support & sleeves</Link>
                </li>
                <li>
                  <Link to={"#"}>Heel support</Link>
                </li>
                <li>
                  <Link to={"#"}>Crepe Bandage</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* =============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Personal care
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* =========================================================== */}
          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Skin Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Body Lotions</Link>
                </li>
                <li>
                  <Link to={"#"}>Mosquito Repellents</Link>
                </li>
                <li>
                  <Link to={"#"}>Lip Balm</Link>
                </li>
                <li>
                  <Link to={"#"}>Acne Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Bath Essentials</Link>
                </li>
                <li>
                  <Link to={"#"}>Facewash</Link>
                </li>
                <li>
                  <Link to={"#"}>Sanitizers & Handwash</Link>
                </li>
                <li>
                  <Link to={"#"}>Sunscreen</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Sexual Wellness</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Condoms</Link>
                </li>
                <li>
                  <Link to={"#"}>Lubricants & Massage Gels</Link>
                </li>
                <li>
                  <Link to={"#"}>Personal body massagers</Link>
                </li>
                <li>
                  <Link to={"#"}>Men Performance Enhancers</Link>
                </li>
                <li>
                  <Link to={"#"}>Sexual Health Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Baby Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Baby & Infant Food</Link>
                </li>
                <li>
                  <Link to={"#"}>Baby Diapers, wipes & more</Link>
                </li>
                <li>
                  <Link to={"#"}>Nursing & Feeding</Link>
                </li>
                <li>
                  <Link to={"#"}>Baby Bath Essentials</Link>
                </li>
                <li>
                  <Link to={"#"}>Baby Skin Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Baby Healthcare</Link>
                </li>
                <li>
                  <Link to={"#"}>Baby Oral Health</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Hair Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Shampoo</Link>
                </li>
                <li>
                  <Link to={"#"}>Hair Conditioners</Link>
                </li>
                <li>
                  <Link to={"#"}>Hair Oils</Link>
                </li>
                <li>
                  <Link to={"#"}>Hair Growth Products</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Elderly Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Adult Diapers</Link>
                </li>
                <li>
                  <Link to={"#"}>Bone & Joint Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Living & Safety Aids</Link>
                </li>
                <li>
                  <Link to={"#"}>Orthopaedic Supports</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Women Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Women Care Supplements.</Link>
                </li>
                <li>
                  <Link to={"#"}>Mother Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Menopause</Link>
                </li>
                <li>
                  <Link to={"#"}>Polycystic Ovary Syndrome</Link>
                </li>
              </ul>
            </div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Men Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Men Grooming</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Oral Care</strong>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Pet Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Pet Grooming</Link>
                </li>
                <li>
                  <Link to={"#"}>Pet Food</Link>
                </li>
                <li>
                  <Link to={"#"}>Pet Health Care</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Health Conditions
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* Sub menu */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Ayurveda Products
          </Link>
          <span>
            <FiChevronDown />
          </span>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Homeopathy
          </Link>
          <span>
            <FiChevronDown />
          </span>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Featured
          </Link>
          <span>
            <FiChevronDown />
          </span>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Covid Essentials
          </Link>
          <span>
            <FiChevronDown />
          </span>
        </li>
        <li>
          <Link className="link" to={"#"}>
            Health Resource Center
          </Link>
          <span>
            <FiChevronDown />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderP3;
