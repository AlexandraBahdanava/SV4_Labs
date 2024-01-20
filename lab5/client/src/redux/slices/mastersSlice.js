import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  masters: [],
  selectedIds: new Set(),
  isFormOpen: false,
  editingMaster: null,
  filteredMasters: [],
  isSearchPerformed: false,
  experienceFilter: [0, 10],
  selectedSpecialization: "",
  role: localStorage.getItem("role"),
};

const mastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    setMasters: (state, action) => {
      state.masters = action.payload;
    },
    setSelectedIds: (state, action) => {
      state.selectedIds = action.payload;
    },
    setIsFormOpen: (state, action) => {
      state.isFormOpen = action.payload;
    },
    setEditingMaster: (state, action) => {
      state.editingMaster = action.payload;
    },
    setFilteredMasters: (state, action) => {
      state.filteredMasters = action.payload;
    },
    setIsSearchPerformed: (state, action) => {
      state.isSearchPerformed = action.payload;
    },
    setExperienceFilter: (state, action) => {
      state.experienceFilter = action.payload;
    },
    setSelectedSpecialization: (state, action) => {
      state.selectedSpecialization = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const {
  setMasters,
  setSelectedIds,
  setIsFormOpen,
  setEditingMaster,
  setFilteredMasters,
  setIsSearchPerformed,
  setExperienceFilter,
  setSelectedSpecialization,
  setRole,
} = mastersSlice.actions;
export default mastersSlice.reducer;
