class EventsController < ApplicationController
  before_action :set_event, only: [ :update, :destroy]

  def index
    events = Event.all
    render json: events, status: 200
  end
  def create
    event = Event.new(event_params)
    if event.save
      render json: "Event Saved".to_json, status:200
    else
      render_error
    end
  end

  def update
    if @event.update(event_params)
      render "Event Updated".to_json, status: :ok
    else
      render_error
    end
  end

  def destroy
    if @event.destroy
      render json: "Event Deleted".to_json, status: 200
    else
      render_error
    end
  end
  private
  def render_error
    render json: "Error".to_json, status: 500
  end
  def set_event
    @event = Event.find(params[:id])
  end
  def event_params
      params.require(:event).permit(:title, :start, :end)
  end
end
