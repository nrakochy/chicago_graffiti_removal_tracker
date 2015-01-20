
APP_ROOT = File.expand_path '../', File.dirname(__FILE__)

worker_processes 4

working_directory APP_ROOT
preload_app false
timeout 45


# pid "#{APP_ROOT}/tmp/unicorn.pid"

# listen 8001

# stderr_path "#{APP_ROOT}/log/unicorn.stderr.log"
# stdout_path "#{APP_ROOT}/log/unicorn.stdout.log"

# before_fork do |server, worker|
#   old_pid = "#{APP_ROOT}/tmp/unicorn.pid.oldbin"

#   if File.exists?(old_pid) && server.pid != old_pid
#     begin
#       Process.kill("QUIT", File.read(old_pid).to_i)
#     rescue Errno::ENOENT, Errno::ESRCH
#     end
#   end
# end
