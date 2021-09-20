class DoctorsController < ApplicationController
  before_action :set_doctor, only: [ :show, :destroy ]
  # before_action :set_doctor, only: null_session
# end
  def index
    @doctors = Doctor.all 
    render component: 'Doctors', props: { doctors: @doctors }
  end

  def show
    @doctor = Doctor.find(params[:id])
    render component: 'Doctor', props: { doctor: @doctor, patients: @doctor.patients }
  end

  def new
    @doctor = Doctor.new
    render component: 'DoctorNew', props: { doctor: @doctor }
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      redirect_to doctors_path
    else
      render component:'DoctorNew', props: { doctor: @doctor }
    end
  end

  def edit
   @doctor = Doctor.find(params[:id])
   render component: 'DoctorEdit', props: { doctor: @doctor }
  end

  def update
    @doctor = Doctor.find(params[:id])
    if @doctor.update(doctor_params)
      redirect_to doctors_path
    else
      render component: 'DoctorEdit', props: { doctor: @doctor }
    end
  end

  def destroy
    # @doctor = Doctor.find(params[:id])
    @doctor.destroy
    redirect_to doctors_path
  end

  private
  def doctor_params
    params.require(:doctor).permit(:first_name, :last_name)

  end
  def set_doctor
    @doctor = Doctor.find(params[:id])
  end
end

