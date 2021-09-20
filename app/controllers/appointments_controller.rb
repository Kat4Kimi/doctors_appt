class AppointmentsController < ApplicationController
  before_action :set_patient

  def index
    @appointments = @patient.appointments

    render component: 'Appointments', props: { patient: @patient, appointments: @appointments }
  end

  def new
    @appointment = @patient.appointments.new(params[:id])
    render component: 'Appointment', props: { patient: @patient, appointment: @appointment }
  end

  def create
    @appointment = @patient.appointments.new(appointment_params)

    if @appointment.save
      redirect_to patient_appointment_path
    else
      render component: 'AppointmentNew', props: {patient: @patient, appointment: @appointment }
    end
  end

  def edit
    @appointment = @patient.appointments.find(params[:id])
    render component: 'AppointmentEdit', props: { patient: @patient, appointment: @appointment }
  end

  def update
    @appointment = @patient.appointments.find(params[:id])
    if @appointment.update(appointment_params)
      redirect_to patient_appointment_path
    else
      render component: 'AppointmentEdit', props: { patient: @patient, appointment: @appointment }
    end
  end

  def show
    @appointment = @patient.appointment.find(params[:id])
    render component: 'Appointment', props: { patient: @patient, appointment: @appointment }
  end
end

  def destroy
    @patient.appointments.find(params[:id]).destroy
    redirect_to patient_appointment_path
  end

  private 
    def set_patient
      @patient = Patient.find(params[:patient_id])
    end
  end