class AppointmentsController < ApplicationController
  before_action :set_patient

  def index
    @appointments = @patient.appointments
    render component: 'Appointments', props: { appoinments: @appointments, patient: @patient, doctors: Doctor.all }
  end

  def show
    @appointment = @patient.appointments.find(params[:id])
    render component: 'Appointment', props: { patient: @patient, appointment: @appointment, doctors: @doctors }
  end

  def new
    @doctors = Doctor.all - @patient.doctors
    @appointment = @patient.appointments.new
    render component: "AppointmentNew", props: { patient: @patient, appointment: @appointment, doctors: @doctors }
  end

  def create
    @appointment = @patient.appointments.new(appointment_params)
    @doctors = Doctor.all - @patient.doctors
    if @appointment.save
      redirect_to patient_appointments_path(@patient)
    else
      render component: "AppointmentNew", props: { patient: @patient, appointment: @appointment, doctors: @doctors }
    end
  end

  def destroy
    @appointment = @patient.appointments.find(params[:id])
    @appointment.destroy
      redirect_to patient_appointments_path(@patient)
  end

 private
   def set_patient
     @patient = Patient.find(params[:patient_id]) 
   end

   def appointment_params
     params.require(:appointment).permit(:date, :time, :reason, :doctor_id)
   end
end
