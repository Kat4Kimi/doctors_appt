class DoctorsController < ApplicationController
  # before_action :set_store, only: [:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
    render component: 'Doctors', props: { doctors: @doctors }
  end

  def new
    @doctor =Doctor.new
    render component: 'DoctorNew', props: { doctor: @doctor }
  end

  def create
    @doctor = Doctor.new(doctor_params)
  if @doctor.save 
    redirect_to root_path 
    #  /*look at localhost3000.com/rails/info/route *
  else
    render component: 'DoctorNew', props: { doctor: @doctor }
  end
end


  def edit
    @doctor =Doctor.find(params[:id])
  render component: 'DoctorEdit', props: { doctor: @doctor }
  end

  def update
    @doctor = Doctor.find(params[:id])
  if @doctor.update(doctor_params)
    redirect_to root_path
  else
    render component: 'DoctorEdit', props: { doctor: @Doctor }
  end
end

  def show
    @patient = Doctor.find(params[:id])
    render component: 'Doctor', props: { doctor: @DoctorEdit }
  end

def destroy
  @doctor = Doctor.find(params[:id])
  @doctor.destroy
  redirect_to root_path

  # or 
  # Sub.find(params[:id]).destroy
  # redirect_to subs_path
end

private 
  # def set_doctor

   
  def doctor_params
    params.require(:doctor).permit(:name)
  end

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end
end


