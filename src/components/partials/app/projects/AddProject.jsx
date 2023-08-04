import React, { useState } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddModal, pushProject } from "./store";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import FormGroup from "@/components/ui/FormGroup";
import DropZone from "../../froms/DropZone";
import Upload from "../../froms/Upload";
const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};

//   {
//     value: "mahedi",
//     label: "Mahedi Amin",
//     image: "/assets/images/avatar/av-1.svg",
//   },
//   {
//     value: "sovo",
//     label: "Sovo Haldar",
//     image: "/assets/images/avatar/av-2.svg",
//   },
//   {
//     value: "rakibul",
//     label: "Rakibul Islam",
//     image: "/assets/images/avatar/av-3.svg",
//   },
//   {
//     value: "pritom",
//     label: "Pritom Miha",
//     image: "/assets/images/avatar/av-4.svg",
//   },
// ];
const options = [
  {
    value: "Residental",
    label: "Residental",
  },
  {
    value: "Commercial & Corporate",
    label: "Commercial & Corporate",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Government",
    label: "Government",
  },
  {
    value: "Health Care",
    label: "Health Care",
  },
];

const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon;

  return (
    <components.Option {...props}>
      <span className="flex items-center space-x-4">
        <div className="flex-none">
          <div className="h-7 w-7 rounded-full">
            <img
              src={data.image}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <span className="flex-1">{data.label}</span>
      </span>
    </components.Option>
  );
};

const AddProject = () => {
  const { openProjectModal } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const FormValidationSchema = yup
    .object({
      title: yup.string().required("Title is required"),

      tags: yup.mixed().required("Tag is required"),
      startDate: yup
        .date()
        .required("Start date is required")
        .min(new Date(), "Start date must be greater than today"),
      endDate: yup
        .date()
        .required("End date is required")
        .min(new Date(), "End date must be greater than today"),
    })
    .required();

  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    const project = {
      id: uuidv4(),
      name: data.title,

      // get only data value from startDate and endDate
      category: null,
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      // progress: Math.floor(Math.random() * (100 - 10 + 1) + 10),
    };

    dispatch(pushProject(project));
    dispatch(toggleAddModal(false));
    reset();
  };

  return (
    <div>
      <Modal
        title="Create Project"
        labelclassName="btn-outline-dark"
        activeModal={openProjectModal}
        onClose={() => dispatch(toggleAddModal(false))}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <Textinput
            name="title"
            label="Project Name"
            placeholder="Project Name"
            register={register}
            error={errors.title}
          />
          <Textinput
            name="introduction"
            label="Introduction"
            placeholder="Give a short introduction"
            register={register}
            error={errors.introduction}
          />
          <Textinput
            name="location"
            label="Location"
            placeholder="Enter Location of Site"
            register={register}
            error={errors.location}
          />
          <Textinput
            className="w-40"
            name="area"
            label="Area (Square foot)"
            placeholder="Area of the site"
            register={register}
            error={errors.area}
          />

          <div>
            <Select
              name="pt"
              label="Project Type"
              options={options}
              placeholder="Select project type"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <DropZone label="Before Image" />
            <DropZone label="After Image" />
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-300 ">
            <Upload />
          </div>

          <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <FormGroup
              label="Start Date"
              id="default-picker"
              error={errors.startDate}
            >
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <Flatpickr
                    className="form-control py-2"
                    id="default-picker"
                    placeholder="yyyy, dd M"
                    value={startDate}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d",
                    }}
                  />
                )}
              />
            </FormGroup>
            <FormGroup
              label="End Date"
              id="default-picker2"
              error={errors.endDate}
            >
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <Flatpickr
                    className="form-control py-2"
                    id="default-picker2"
                    placeholder="yyyy, dd M"
                    value={endDate}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d",
                    }}
                  />
                )}
              />
            </FormGroup>
          </div>

          <Textarea label="Description" placeholder="Description" />

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">Add</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddProject;
